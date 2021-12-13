// The entry file of your WebAssembly module.

//export declare function concat_world(arg: string): string;
//
//export function main(): i32 {
//  let hello = concat_world("hello");
//  concat_world(hello);
//  return hello.length;
//}

export declare function call(address: string, func:string): string
export declare function print(message: string): void

export function main(): i32 {
  let string_from = call("get_string.wat", "getString")
  print(string_from)
  return 0;
}
