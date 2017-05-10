
//$(document).ready(function() {
//    $(window).stellar();
//
//});


$(document).ready(function() {

//   function() {

//     // $("html").niceScroll({
//     //     cursorcolor:"rgba(30,30,30,.5)",
//     //     zindex:999,
//     //     scrollspeed:100,
//     //     mousescrollstep:50,
//     //     cursorborder:"0px solid #fff",
//     // });


//   }

    //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	

    window.set_height = function(){
        if($('#page-wrapper').length){
            var cH = parseInt($(".navbar-default").css('height')) + 50;
            $("#page-wrapper").css("min-height", cH+"px");
            clearInterval(mainLoopHeight);
        }
    }

    window.set_logout = function(){
        if($('#loginBtn').length){
            if($('body').data('admin') == '1'){
                $("#loginBtn").attr('href', 'lib/login.php?logout');
                $("#loginBtn div").text('logout');
                $("#loginBtn").removeAttr('data-toggle').removeAttr('data-target');
                clearInterval(mainLoopLogout);
            }
        }
    }
    
    window.check_admin_api = function(){
    
        window.check_admin = function(){
            if($('.editModel').length){
                $.ajax({url: "lib/admin.php?getdata", success: function(result){
                    if(result.code=='200'){
                        var rData = result.data;
                        $.each(rData, function(i, dt) {
                            var htmlDt = decodeURIComponent(dt.descr);
                            
                            $('#EmyModal'+i).find('.edtTitle').val(dt.title);
                            $('#EmyModal'+i).find('.faImgu').val(dt.img);
                            $('#EmyModal'+i).find('.edtNo').val(dt.no);
                            $('#EmyModal'+i).find(".prevfaImgu").removeClass().addClass('fa fa-'+dt.img+' fa-3x prevfaImgu');
                            $('#EmyModal'+i).find('.edtDescr').html(htmlDt);
                            
                            // set model with new data
                            $('#myModal'+i).find('.modal-title').text(dt.title);
                            $('#myModal'+i).find('.modal-body').html(htmlDt);
                            
                            // set bubble boxes with new data
                            $(".bubble.panel").eq(i-1).find(".row").html('<div class="col-xs-3">\
                            <i class="fa fa-'+dt.img+' fa-3x" style="padding: 10px"></i>\
                            </div>\
                            <div class="col-xs-9 text-right">\
                                <div class="huge ng-binding">'+dt.no+'</div>\
                                <div class="ng-binding">'+dt.title+'</div>\
                            </div>');
                            
                            $('.editTextarea').trumbowyg();
                        });
                    }
                }});
                
                if($('body').data('admin') == '1'){
                    $('.editModel').removeClass('editModelhide');
                }
                clearInterval(mainLoopId);
            }
        }
    
    
        var mainLoopId = setInterval(function(){
            // Do your update stuff...
            check_admin();
        }, 1000);

    }
    
    
    // check_admin_api();

    var mainLoopHeight = setInterval(function(){
        // Do your update stuff...
        set_height();
    }, 1000);
    
    var mainLoopLogout = setInterval(function(){
        // Do your update stuff...
        set_logout();
    }, 1000);
    
    var mainLoopCont = setInterval(function(){
        // Do your update stuff...
        if($('body').data('reloadapi') == '1'){
            check_admin_api();
            $('body').data('reloadapi', '0');
        }
    }, 1000);
    
    $.ajax({url: "lib/admin.php", success: function(result){
        if(result.code == 200){
            $('body').data('admin', '1');
        } else {
            $('body').data('admin', '0');
        }
    }});
    
    $("body").on("change", ".faImgu", function () {
        if(this.value != ''){
            $(this).prev(".prevfaImgu").removeClass().addClass('fa fa-'+this.value+' fa-3x prevfaImgu');
        }
    });
    
    $("body").on("click", ".edtSemail", function () {
        var eThis = this;
        var mID = $(eThis).parent().parent().data('id');
        $(eThis).text('Sending ....');
        if(mID != ''){
           $.ajax({url: "lib/send.php?mid="+mID, success: function(result){
                alert('Email Sent !');
                $(eThis).text('Send email');
            }});
       }
    });
    
    $("body").on("click", ".edtSave", function () {
        var eThis = this;
        var mID = $(eThis).parent().parent().data('id');
        var no = $(eThis).parent().parent().find(".edtNo").val();
        var title = $(eThis).parent().parent().find(".edtTitle").val();
        var img = $(eThis).parent().parent().find(".faImgu").val();
        var descr = $(eThis).parent().parent().find(".edtDescr").html();
        $(eThis).text('Saving ....');
        if(mID != ''){
            
            var data = {
                title: title, img: img, descr: descr, no: no, mID: mID
            };
            
            $.post("lib/admin.php?update", data, function(result){ 
                if(result.code=='200'){
                    alert(result.status);
                    $(eThis).text('Save changes');
                    
                    // set model with new data
                    $('#myModal'+mID).find('.modal-title').text(title);
                    $('#myModal'+mID).find('.modal-body').html(descr);
                        
                    $(".bubble.panel").eq(mID-1).find(".row").html('<div class="col-xs-3">\
                    <i class="fa fa-'+img+' fa-3x" style="padding: 10px"></i>\
                    </div>\
                    <div class="col-xs-9 text-right">\
                        <div class="huge ng-binding">'+no+'</div>\
                        <div class="ng-binding">'+title+'</div>\
                    </div>');
                } else {
                    alert(result.status);
                }
            });
            
            
       }
    });
    
    
    
    // $("body").on("click", "ul.nav in>li", function () {
    //     console.log(location.hash);
    // });
    
    window.set_schedl = function(){
        if($('.tab-pane').length){
            var d = new Date();
            var currDay = d.getDay();
            
            $(".nav-pills li").removeClass('active');
            if(currDay == 6){
                $(".tab-pane").removeClass('active');
                $("#saturday").addClass('active');
                $(".nav-pills li").find("a[href='#saturday']").parent().addClass('active');
            } else if(currDay == 7){
                $(".tab-pane").removeClass('active');
                $("#sunday").addClass('active');
                $(".nav-pills li").find("a[href='#sunday']").parent().addClass('active');
            } else {
                $(".tab-pane").removeClass('active');
                $("#weekday").addClass('active');
                $(".nav-pills li").find("a[href='#weekday']").parent().addClass('active');
            }
            
            clearInterval(mainLoopschedl);
        }
    }
    
    
    
    var mainLoopschedl = setInterval(function(){
        // Do your update stuff...
        set_schedl();
    }, 1000);

});


var myApp = angular.module('iskconApp')
  .controller('MainCtrl', function($scope,$position) {
        $('body').data('reloadapi', '1');
});

myApp.run(function($rootScope) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) { 
        // handle route changes     
        // console.log("NEXT:"+next);
        // console.log("CURRENT:"+current);
        $(".navbar-collapse").removeClass('in').css('height', '1px');
    });
});

