interface Options {
  title: string;
  value: string;
}
interface SelectButtonProps extends React.HTMLProps<HTMLSelectElement> {
  title: string;
  name: string;
  options: Array<Options>;
}
