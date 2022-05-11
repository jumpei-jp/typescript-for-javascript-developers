export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//ある型だけを除外したい
type FunctionType = Exclude<SomeTypes, string | number>;

//DebugTypeを除外してみる
type NunFunctionType = Exclude<SomeTypes, DebugType>;

type typeExcludingFunction = Exclude<SomeTypes, Function>;

//Debugtype抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

//nonnullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;