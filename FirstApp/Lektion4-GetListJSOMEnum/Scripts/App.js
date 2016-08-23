'use strict';

var lists;

//ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

//function initializePage() {
//    var context = SP.ClientContext.get_current();
//    var user = context.get_web().get_currentUser();

//    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
//    $(document).ready(function () {
//        getUserName();
//    });

//    // This function prepares, loads, and then executes a SharePoint query to get the current users information
//    function getUserName() {
//        context.load(user);
//        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//    }

//    // This function is executed if the above call is successful
//    // It replaces the contents of the 'message' element with the user name
//    function onGetUserNameSuccess() {
//        $('#message').text('Hello ' + user.get_title());
//    }

//    // This function is executed if the above call fails
//    function onGetUserNameFail(sender, args) {
//        alert('Failed to get user name. Error:' + args.get_message());
//    }
//}

//se 'Create List demo javascriptkod' dok!
//tillagt:

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage() {


    $(document).ready(function() {
        var context = SP.ClientContext.get_current();
        var list = context.get_web().get_lists().getByTitle('DemoList3');
        context.load(list);

        context.executeQueryAsync(onGetlistSuccess, onGetListFail);
    });

    function onGetlistSuccess() {
        document.getElementById("message").innerHTML = 'Listan finns redan, vi kan inte skapa den två gånger.';
    }

    function onGetListFail() {
        //listan finns inte, alltså kan vi skapa den!
        var currContext = SP.ClientContext.get_current();
        var listCreationInfo = new SP.ListCreationInformation();

        listCreationInfo.set_title('DemoList3');
        listCreationInfo.set_templateType(SP.ListTemplateType.genericList);

        var newMyList = currContext.get_web().get_lists().add(listCreationInfo);

        currContext.load(newMyList);
        currContext.executeQueryAsync(onCreateSuccess, onCreateFail);
    }

    function onCreateSuccess() {
        document.getElementById("message").innerHTML = 'Listan skapades utan problem.<br/> ';
        var newContext = SP.ClientContext.get_current();
        lists = newContext.get_web().get_lists();
        newContext.load(lists);

        newContext.executeQueryAsync(onGetAllListsSuccess, onGetAllListsFail);
    }

    function onGetAllListsSuccess() {
        var listEnumerator = lists.getEnumerator();
        var listinfo = "";
        while (listEnumerator.moveNext()) {
            var olist = listEnumerator.get_current();
            listinfo += '<li>' + olist.get_title() + '</li>';
        }
        document.getElementById("message").innerHTML += 'Lists found:<ul>' + listinfo + '</ul>';
    }

    function onGetAllListsFail(sender, args) {
        document.getElementById("message").innerHTML = 'Error (i funktionen onGetAllListsFail): ' + args.get_message();
    }

    function onCreateFail(sender, args) {
        document.getElementById("message").innerHTML = 'Error (i funktionen onCreateFail): ' + args.get_message();
    }

    //Lägga till list item med JSOM
    function addListItem() {
        //
        var hostWebUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
        var context = SP.ClientContext.get_current();
        var hostContext = new SP.AppContextSite(context, hostWebUrl);

        var list2 = hostContext.get_web().get_lists().getByTitle('nyLista');
        var itemCreationInfo = new SP.ListItemCreationInformation();
        var newListItem = list2.addItem(itemCreationInfo);

        newListItem.set_item("Title", "Johan");
        //newListItem.set_item("Department", "Ekonomi");

        context.load(newListItem);
        context.executeQueryAsync(onCreateItemSuccess(), onCreateItemFail(), addListItem());
        newListItem.update();
        //
    }

    function onCreateItemSuccess() {
        document.getElementById("message").innerHTML = "Item created successfully!";
    }

    function onCreateItemFail(sender, args) {
        document.getElementById("message").innerHTML = "Failed to create item" + args.get_message();
    }

    function getQueryStringParameter(param) {
        var params = document.URL.split("?")[1].split("&");
        //var strParams = "";
        for (var i = 0; i < params.length; i = i++) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == param) {
                return singleParam[1];
            }
        }
    }

    //Ändra list item med JSOM:
    function editListItem() {
        var listItemEnumerator = lists.getEnumerator();
        var listItem = "";
        while (listItemEnumerator.moveNext()) {
            var olistItem = listItemEnumerator.get_current();
            listItem += '<li>' + listItemEnumerator.get_current() + '</li>';

            if (olistItem.get_item("Title") === "Andreas") {
                olistItem.set_item("Title", "Peter");
                olistItem.update;
            }
        }
        context.executeQueryAsync(onEditListItemSuccess(), onEditListItemFail(), editListItem());
    }

    function onEditListItemSuccess() {
        document.getElementById("message").innerHTML = "Item edited successfully!";
    }

    function onEditListItemFail(sender, args) {
        document.getElementById("message").innerHTML = "Failed to edit item" + args.get_message();
    }

}