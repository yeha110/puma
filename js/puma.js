$(function(){
    lnbControl();
    panelControl("[data-panel$='Panel']");
    mainTopSlider();
    wishControl();
    cartControl();
    tabUI();
    // checknext();
    checkmethod();
    checkPopup();
});
function lnbControl(){
    var lnb = $("#lnbContainer");
    var currentStatus = false;
    $("[data-lnb='lnbContainer']").click(function(){
        currentStatus = !currentStatus;
        lnb.toggleClass("active");
        if(currentStatus == true){
            $(this).val("close");
        }else{
            $(this).val("drag_handle");
        }
    });
}

function panelControl(target){
    var currentPanel = null;
    $(target).click(function(){
        console.log(currentPanel);
        if (currentPanel) {
            $(currentPanel).removeClass("active");
        }
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(this).parents().removeClass("active");
    });
}

function mainTopSlider(){
    $(".mainTopSlider").bxSlider({
        pager: false,
        controls: false,
        auto: true
    });
}

function wishControl(){
    var wish = $("#sharePopup");
    $("[data-popup='sharePopup']").click(function(){
        wish.toggleClass("active");
    });
}

function cartControl(){
    var cart = $("#gnb_cart_Panel");
    $("[data-panel='gnb_cart_panel']").click(function(){
        cart.toggleClass("active");
    });
}

function tabUI(){
    var originalOrder = [];
    $(".tabContent .tabPage").each(function (){
        originalOrder.push(this);
    });
    $(".tabMenu button").click(function(){
        var activeTab = '#' + $(this).attr("data-tab");
        console.log(activeTab);

        $(".tabMenu button").removeClass("active");
        $(this).addClass("active"); 

        $(".tabContent").append(originalOrder);
        $(".tabContent").prepend($(activeTab));
        console.log(activeTab);

        $("[class^='tabPage']").removeClass("active");
        $(activeTab).addClass('active');
    });
}

// function checknext(){
//     $(".cotabPage input[type='submit']").click(function(){
//         var findform = $(this).closest("form");
//         var currentDiv = $(this).closest(".cotabPage");
//         var nextDiv = currentDiv.nextAll(".cotabPage").first();
//         console.log(nextDiv);
        
//         var nextDivid = nextDiv.attr("id");
        
//         findform.attr("action", nextDivid);
//     });
// }

function checkmethod(){
   $("#SPshippingPanel fieldset ul input").on("input",function(){
        var inputVal = $(this).val();    
        var inputId = $(this).attr("id");
        $("span[data-addr='" + inputId + "']").text(inputVal + "");
    }); 
}

function checkPopup(){
    $("#paymentPanel fieldset > input[type='button']").click(function(){
        var activePopup = $("#txtcheckPopup"); 
        activePopup.toggleClass("active");
        console.log(activePopup);
    });
}