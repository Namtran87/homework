class BaseComponent extends HTMLElement {
    prop;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.props = {};
        this.state = {};
    }
    connectedCallBack() {
        this.render();
        this.componentDidMount();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }
    disconnectedCallBack() {
        this.componentWillUnmount();
    }
    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }
    /**
     * in html ra ngoài màn hình và gán các thẻ
     * gán sự kiện cho các thẻ bên trong component
     */
    render() {

    }
    /**
     * Được gọi sau khi component sinh ra, sau khi render.
     * Được gọi 1 lần duy nhất.
     */
    componentDidMount() {

    }
    /**
     * Được gọi sau khi próps hoặc state thay đổi render.
     */
    componentDidUpdate() {

    }
    /**
     * Được gọi trước khi component biến mất
     */
    componentWillUnmount() {

    }
}

export { BaseComponent };