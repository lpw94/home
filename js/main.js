require.config(
        {
            paths: {
                'jquery': 'jquery-1.7.2.min'
            }
        }
    );
    
    
    
    require(['jquery'],function ($) {
             $(document).on('click','#contentBtn',function(){
                $('#messagebox').html('You have access Jquery by using require()');
             });
    });