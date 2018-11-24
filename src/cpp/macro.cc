#include "init.h"

Napi::Object InitAll( Napi::Env env, Napi::Object exports )
{
    return Macro::MyObject::Init( env, exports );
}

NODE_API_MODULE( addon, InitAll );
