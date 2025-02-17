Ext.define("SauceApp.view.login.Login",{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'SauceApp.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: '设备管理系统',
    closable: false,
    autoShow: true,
    
    initComponent : function() {
		this.items = [{
			xtype : 'form',
			border : false,
			bodyStyle : "padding: 10px;",
			waitMsgTarget : true,
			labelAlign : "left",
			items : [{
				xtype : 'textfield',
				name : 'LoginForm[username]',
				id : 'userName',
				fieldLabel : '用户名',
				allowBlank : false,
				blankText : '请输入用户名',
				msgTarget : 'side',
				selectOnFocus : true,
				enableKeyEvents : true
			}, {
				xtype : 'textfield',
				inputType : 'password',
				name : 'LoginForm[password]',
				id : 'password',
				fieldLabel : '密码',
				allowBlank : false,
				blankText : '请输入密码',
				msgTarget : 'side',
				selectOnFocus : true,
				enableKeyEvents : true
			}]
		}];
		this.buttons = [{
			xtype : 'label',
			style : {
				color : '#ff0000'
			},
			id : 'msgField',
			width : 200
		}, {
			text : '<b>登录</b>',
			formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
		}];
		this.callParent(arguments);
	}
});