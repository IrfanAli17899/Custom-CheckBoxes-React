
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cool: true
    }
  }

  render() {
    return (
     
        <Checkbox
          data={[
            { name: "Auto", isChecked: false },
            { name: "Bussiness", isChecked: false },
            { name: "Computers", isChecked: false },
            { name: "Design", isChecked: false }
          ]}
          limit={2}
        />
    );

  }
}


ReactDOM.render(<Welcome name="Irfan Ali" />, document.getElementById('root'));

