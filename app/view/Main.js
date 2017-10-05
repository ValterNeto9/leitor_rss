Ext.define("Rss.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Panel',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.NestedList',
        'Rss.view.Depijama',
        'Rss.view.SenchaBlog',
        'Rss.view.TopRated',
    ],

    config: {
        tabBarPosition: 'bottom',
        animation:'fade',

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                cls: 'home',
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'RSS!',
                },
                html: [
                    '<img style="margin-left: 40%; margin-right: 50%;" src="/rss/resources/images/rss.png" />',
                ].join("")
            },
            {
                xtype: 'feedSenchaBlog',
                title: 'Sencha Blog',
            },
            {
                xtype: 'feedDepijama',
                title: 'Depijama',
            },
            {
                xtype: 'feedTopRated',
                title: 'Top Rated',
            }
        ]
    }
});
