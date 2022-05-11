export {};

type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//ある型だけを除外したい
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;
//Debugtype抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

//nonnullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;