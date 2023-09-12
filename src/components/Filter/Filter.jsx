export function Filter(props) {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={props.filter}
        onChange={props.InputChange}
      />
    </>
  );
}
