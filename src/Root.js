

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
)
Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root