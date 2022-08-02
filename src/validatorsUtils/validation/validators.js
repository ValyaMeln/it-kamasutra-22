export const requiredFild = value => {
  if (value) return undefined;

  return "File is required!!!!";
};

export const maxLengthCreator =(maxLength)=> value => {
  if (value.length > maxLength) return `довгий запис ${maxLength}`;
  return undefined;

};