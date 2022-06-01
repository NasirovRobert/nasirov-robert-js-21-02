class divComponent extends React.Component {
    render() {
        return <div className="box">
            <p>This is box by React</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum excepturi exercitationem illum
                iusto
                nesciunt vero. Accusamus aspernatur cumque, deserunt eius error, maxime mollitia, neque optio
                perspiciatis
                qui ratione voluptatem?</p>
        </div>
    }
}

ReactDOM.render(
    React.createElement(divComponent),
    document.getElementById('containerbox1')
);
ReactDOM.render(React.createElement(divComponent), document.getElementById('containerbox2'));
ReactDOM.render(React.createElement(divComponent), document.getElementById('containerbox3'));