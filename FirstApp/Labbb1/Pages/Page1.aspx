<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />


    <link rel="stylesheet" type="text/css" href="<../Content/App.css" />
    <link href="../Content/App.css" rel="stylesheet" />

    <script type="text/javascript" src="../Scripts/Labb1.js"></script>

</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />

    <div class="container">
        <form id="myForm">
            <label>First name:</label><br />
            <input type="text" name="Firstname" id="firstName" /><br />
            <label>Last Name:</label><br />
            <input type="text" name="Lastname" id="lastName" /><br />
            <label>E-mail:</label><br />
            <input type="text" name="E-mail" id="email" /><br />
            <label>Adress:</label><br />
            <input type="text" name="Adress" id="adress" /><br />
            <label>Postnumber:</label><br />
            <input type="number" name="Number" id="postNumber" /><br />
            <label>State:</label><br />
            <input type="text" name="State" id="state" /><br />
            <label>Phone Number:</label><br />
            <input type="text" name="Phone number" id="phoneNumber" /><br />
            <label>Start Date:</label><br />
            <input type="date" name="Start date" id="startDate" /><br />
        </form>
    </div>

    <div class="row">
        <p id="getBtnValues">
            <button onclick="GetValues()" id="OKButton">OK</button>
        </p>
        <p>
            <button onclick="button" id="cancelButton">Cancel</button>
        </p>
    </div>


</asp:Content>
