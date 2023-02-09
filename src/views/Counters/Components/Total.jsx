function TotalComponent({ number }) {
  return (
    <div className="text-2xl space-x-3 flex items-center">
      <div>Total:</div>
      <div>{number}</div>
    </div>
  );
}
export default TotalComponent;
