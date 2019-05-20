class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            count: 0,
            limit: 2
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { data, limit } = nextProps;
        return {
            data:data || [],
            limit:limit || 2
        }
    }

    toggle = (e, i) => {
        var { data, count, limit } = this.state;
        if (!data[i].isChecked && count < limit) {
            count = data[i].isChecked ? count == 0 ? count : count - 1 : count + 1
            data[i].isChecked = true
        } else if (data[i].isChecked) {
            data[i].isChecked = false;
            count = count - 1
        }
        this.setState({
            data,
            count
        })

    }
    render() {
        const { data } = this.state
        return (
            <div>
                {data.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={item.isChecked ? "normalClass checkSelected" : "normalClass checkNotSelected"}
                            onClick={(e) => this.toggle(e, index)}>
                            {item.name}
                        </button>
                    )
                })}
            </div>
        );
    }
}
