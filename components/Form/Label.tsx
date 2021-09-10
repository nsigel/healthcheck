interface Props {
  text: string;
}

const Label = (props: Props) => {
  return <span className="text-xs mb-1 text-gray-500">{props.text}</span>;
};

export default Label;
