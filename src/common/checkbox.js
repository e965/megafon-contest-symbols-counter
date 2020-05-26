const Checkbox = props => {
    const { label, ...checkboxProps } = props;

    return (
        <div class="info-input-group">
            <label>{label}</label>
            <input class="m-l" type="checkbox" {...checkboxProps} />
        </div>
    );
};

export default Checkbox;
