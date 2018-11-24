#include "init.h"

namespace Macro
{
    Napi::FunctionReference MyObject::constructor;

    Napi::Object MyObject::Init( Napi::Env env, Napi::Object exports )
    {
        Napi::HandleScope scope( env );
        Napi::Function func = DefineClass( env, "MyObject", {InstanceMethod( "value", &MyObject::value ), InstanceMethod( "plusOne", &MyObject::PlusOne ), InstanceMethod( "multiply", &MyObject::Multiply )} );
        constructor         = Napi::Persistent( func );
        constructor.SuppressDestruct();
        exports.Set( "MyObject", func );
        return exports;
    }

    MyObject::MyObject( const Napi::CallbackInfo &info ) : Napi::ObjectWrap<MyObject>( info )
    {
        this->value_ = 0;
        this->value( info );
    }


    Napi::Value MyObject::value( const Napi::CallbackInfo &info )
    {
        Napi::Env env = info.Env();
        int length = info.Length();
        if ( length <= 0 ) return Napi::Number::New( env, 1*this->value_);
        if ( length <= 0 || !info[0].IsNumber() ) {
            Napi::HandleScope scope( env );
            Napi::TypeError::New( env, "Number expected" ).ThrowAsJavaScriptException();
        }
        Napi::Number val = info[0].As<Napi::Number>();
        this->value_ = val.DoubleValue();
        return Napi::Number::New( env, 1*this->value_ );
    }

    Napi::Value MyObject::PlusOne( const Napi::CallbackInfo &info )
    {
        this->value_ = this->value_ + 1;
        return MyObject::value( info );
    }

    Napi::Value MyObject::Multiply( const Napi::CallbackInfo &info )
    {
        Napi::Number multiple;
            if ( info.Length() <= 0 || !info[0].IsNumber() ) {
                multiple = Napi::Number::New( info.Env(), 1 );
            } else {
                multiple = info[0].As<Napi::Number>();
            }
        Napi::Object obj = constructor.New( {Napi::Number::New( info.Env(), this->value_ * multiple.DoubleValue() )} );
        return obj;
    }

} // namespace Macro
