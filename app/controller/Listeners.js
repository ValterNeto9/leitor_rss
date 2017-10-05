Ext.define('Rss.controller.Listeners', {
 	extend: 'Ext.app.Controller',

 	config: {
 		xtype: 'nestedlist',
    	iconCls: 'star',
    	cls: 'depijama',
    	displayField: 'title',
        store: {
            type: 'tree',
	        fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
	            name: 'leaf',
	            defaultValue: true
	        }],
	        root: {
	            leaf: false
	        },
	        proxy: {
	            type: 'jsonp',
	            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/Depijama',
	            reader: {
	                type: 'json',
	                rootProperty: 'responseData.feed.entries'
	            }
	        }
	    },
	    detailCard: {
	        xtype: 'panel',
	        scrollable: true,
	        styleHtmlContent: true
	    },
	    listeners: {
	        itemtap: function(nestedList, list, index, element, post) {
	            this.getDetailCard().setHtml(post.get('content') + '<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + post.get('link') +'" data-text="' + post.get('title') +'" data-related="ValterNeto9" data-lang="pt" data-size="large" data-count="vertical">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script></br><iframe src="http://www.facebook.com/plugins/like.php?href='+post.get('link')+'&;layout=standard&2.show_faces=false&width=380&action=like&colorscheme=light&height=25&locale=pt_BR" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:250px; height:25px;" allowTransparency="true"></iframe>');
	        }
	    }   
	}
});	