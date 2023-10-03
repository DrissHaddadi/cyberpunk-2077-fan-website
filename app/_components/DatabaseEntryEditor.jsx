const DatabaseEntryEditor = (props) => {
  return (
    <div className=" basis-2/3 text-cyber-red font-play_regular text-base leading-7">
      <p>We are going to edit {props.message}</p>
      <p>We are going to edit {props.entryToEdit.title}</p>
    </div>
  );
};

export default DatabaseEntryEditor;
