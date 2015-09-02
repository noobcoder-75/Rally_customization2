Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log("My first app");
        this.add({
            xtype: 'rallygrid',
            columnCfgs: [
                'FormattedID',
                'Name',
                'ScheduleState',
                'PlanEstimate',
                'AcceptedDate',
                'InProgress'
                ],
            context: this.getContext(),
            enableEditing: true,
            showRowActionsColumn: true,
            storeConfig: {
                model: 'userstory'
            }
        });
    }
});
