Ext.define('Rss.view.Depijama', {
 	extend: 'Ext.dataview.NestedList',
 	xtype:'feedDepijama',

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
	            this.getDetailCard().setHtml(post.get('content') + '<iframe src="//www.facebook.com/plugins/like.php?href='+post.get('link')+'&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe></br><iframe class="twitter-share-button twitter-count-horizontal" scrolling="no" frameborder="0" tabindex="0" allowtransparency="true" src="http://platform0.twitter.com/widgets/tweet_button.html?_=1303294651733&count=horizontal&lang=pt&text='+ post.get('title')+'&url='+ post.get('link')+'" style="width: 110px; height: 20px;" title="Twitter For Websites: Tweet Button"></br><iframe src="http://www.facebook.com/plugins/like.php?href='+post.get('link')+'&layout=standard&<br>show_faces=false&width=380&action=like&colorscheme=light&height=25&locale=pt_BR" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:250px; height:25px;" allowTransparency="true"></iframe>');
	        }
	    }   
	}
});	