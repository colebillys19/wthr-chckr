function UserLocationOff() {
  const handleSetLocation = () => {
    alert("need to trigger modal here");
  };

  return (
    <div>
      <span>You've chosen not to set your location.</span>&nbsp;
      <button onClick={handleSetLocation}>set location</button>
    </div>
  );
}

export default UserLocationOff;
