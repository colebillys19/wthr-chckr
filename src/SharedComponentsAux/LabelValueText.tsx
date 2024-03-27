type LabelValueTextPropsType = {
  label: string;
  value: string;
};

function LabelValueText({ label, value }: LabelValueTextPropsType) {
  //

  return (
    <span className="whitespace-nowrap">
      <span className="text-grey-a whitespace-nowrap">{label}:</span>
      &nbsp;
      <span className="whitespace-nowrap">{value}</span>
    </span>
  );
}

export default LabelValueText;
