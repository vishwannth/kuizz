$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
    });
  });

  function logout(){
    location.href="login.html";
  }
    window.history.forward();
    function noBack()
    {
        window.history.forward();
    }

    function h1(){
        document.getElementById('content').innerHTML="<iframe src=\"gk.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h2(){
        document.getElementById('content').innerHTML="<iframe src=\"spo.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h3(){
        document.getElementById('content').innerHTML="<iframe src=\"movie.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h4(){
        document.getElementById('content').innerHTML="<iframe src=\"s&n.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h5(){
        document.getElementById('content').innerHTML="<iframe src=\"veh.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h6(){
        document.getElementById('content').innerHTML="<iframe src=\"cel.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
    }

    function h7(){
      document.getElementById('content').innerHTML="<iframe src=\"how to play.html\" height=\"100%\" width=\"100%\" frameborder=\"0\"></iframe>";
  }

  
 
  