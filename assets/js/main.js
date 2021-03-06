 function Gotip(option) {
     var self = this;
     var elem = option.elem;
     this.gotip_attr = elem.attr('data-gotip');
     this.offset = option.offset || 10;
     this.offset_top = function() {
         var offset = elem.offset();
         return offset.top;
     }
     this.document_outerWidth = function() {
         return $(document).outerWidth();
     }
     this.offset_left = function() {
         var offset = elem.offset();
         return offset.left;
     }
     this.fly_width = function() {
         return elem.find('.gotip--fly').outerWidth();
     }
     this.fly_height = function() {
         return elem.find('.gotip--fly').outerHeight();
     }
     this.position = function() {
         if (self.fly_width() / 2 > self.offset_left()) {
             elem.find('.gotip--fly').css('left', 'auto').css('margin-left', '0');
         } else {
             elem.find('.gotip--fly').css('left', '50%').css('margin-left', '-' + self.fly_width() / 2 + 'px');
         }
         if (self.fly_height() > self.offset_top()) {
             elem.find('.gotip--fly').css('top', 'auto').css('margin-top', 'auto').css('bottom', '-' + (self.offset + self.fly_height()) + 'px')
         } else {
             elem.find('.gotip--fly').css('margin-top', '-' + (self.offset + self.fly_height()) + 'px');
         }
         if (self.fly_width() > (self.document_outerWidth() - self.offset_left())) {
             elem.find('.gotip--fly').css('left', 'auto').css('right', '0');
         }
     }

     function set_Gotip_fly() {
         elem.append('<span class="gotip--fly">' + self.gotip_attr + '</span>');
         self.position();
     }

     function del_Gotip_fly() {
         elem.find('.gotip--fly').remove();
     }

     elem.on('mouseenter', set_Gotip_fly);
     elem.on('mouseleave', del_Gotip_fly);

 }
 $(document).ready(function() {
     new Gotip({
         elem: $('.js-gotip02'),
     });
     new Gotip({
         elem: $('.js-gotip03'),
     });
     new Gotip({
         elem: $('.js-gotip04'),
     });
     new Gotip({
         elem: $('.js-gotip05'),
     });
     new Gotip({
         elem: $('.js-gotip06'),
     });
 });
