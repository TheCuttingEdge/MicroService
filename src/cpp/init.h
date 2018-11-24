#ifndef INIT_NAPI_ONEGIN_H
#define INIT_NAPI_ONEGIN_H
#include <napi.h>

static Napi::Object InitAll( Napi::Env env, Napi::Object exports );

namespace Macro
{
    class MyObject : public Napi::ObjectWrap<MyObject>
    {
    public:
        static Napi::Object Init( Napi::Env env, Napi::Object exports );
        // static Napi::Object Create( const Napi::CallbackInfo &info );
        MyObject( const Napi::CallbackInfo &info );

        Napi::Value value(const Napi::CallbackInfo &info);

    private:
        static Napi::FunctionReference constructor;

        Napi::Value PlusOne( const Napi::CallbackInfo &info );
        Napi::Value Multiply( const Napi::CallbackInfo &info );

        double value_;
    };

} // namespace Macro
#endif
