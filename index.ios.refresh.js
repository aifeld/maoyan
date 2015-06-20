var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var RCTRefreshControl = require('RCTRefreshControl');
var {
    AppRegistry,
    ListView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    } = React;

var SCROLLVIEW = 'ScrollView';
var LISTVIEW = 'ListView';

var RCTRefreshControlDemo = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['#484848', '#2F9C0A', '#05A5D1']),
        };
    },
    componentDidMount: function() {
        // ScrollView
        RCTRefreshControl.configure({
            node: this.refs[SCROLLVIEW],
            tintColor: '#05A5D1',
            activityIndicatorViewColor: '#05A5D1'
        }, () => {
            this.setTimeout(() => {
                RCTRefreshControl.endRefreshing(this.refs[SCROLLVIEW]);
            }, 2000);
        });

        // ListView
        RCTRefreshControl.configure({
            node: this.refs[LISTVIEW]
        }, () => {
            this.setTimeout(() => {
                RCTRefreshControl.endRefreshing(this.refs[LISTVIEW]);
            }, 2000);
        });
    },
    render: function() {
        return (
            <View style={styles.container}>
                <ScrollView ref={SCROLLVIEW} style={styles.scrollView}>
                    <View style={{backgroundColor: '#05A5D1', height: 200}} />
                    <View style={{backgroundColor: '#FDF3E7', height: 200}} />
                    <View style={{backgroundColor: '#484848', height: 200}} />
                </ScrollView>

                <ListView
                    ref={LISTVIEW}
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
            var color = rowData;
            return (
              <View style={{backgroundColor: color, height: 200}} />
            );
          }}
                    />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
});


AppRegistry.registerComponent('maoyan', () => RCTRefreshControlDemo);