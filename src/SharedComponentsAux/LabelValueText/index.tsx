type LabelValueTextPropsType = {
  label: string;
  value: string;
};

function LabelValueText({ label, value }: LabelValueTextPropsType) {
  //

  return (
    <span>
      <span className="text-grey-a">{label}</span>
      &nbsp;
      <span>{value}</span>
    </span>
  );
}

export default LabelValueText;
