{
  "targets": [
    {
      "target_name": "macro",
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "sources": [ "./src/cpp/macro.cc", "./src/cpp/myobject.cc" ],
      "include_dirs": [
          "./node_modules/node-addon-api"
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    }
  ]
}
