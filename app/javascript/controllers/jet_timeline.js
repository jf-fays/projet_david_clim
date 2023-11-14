export const initJetTimeline = () => {
  (function ($) {
    $(function () {
      const agTimeline = $('.js-timeline');
      const agTimelineLine = $('.js-timeline_line');
      const agTimelineLineProgress = $('.js-timeline_line-progress');
      const agTimelinePoint = $('.js-timeline-card_point-box');
      const agTimelineItem = $('.js-timeline_item');
      let agFlag = false;

      const agTopElement = agTimelineItem.last().find(agTimelinePoint);

      if (agTopElement.length > 0) {

      $(window).on('scroll resize', () => {
        fnOnScroll();
      });

      function fnOnScroll() {
        const agPosY = $(window).scrollTop();
        fnUpdateFrame(agPosY);
      }

      function fnUpdateWindow() {
        agFlag = false;

        const firstItem = agTimelineItem.first();
        const lastItem = agTimelineItem.last();

        const topPosition = firstItem.find(agTimelinePoint).offset().top - firstItem.offset().top;
        const bottomPosition = agTimeline.offset().top + agTimeline.outerHeight() - lastItem.find(agTimelinePoint).offset().top;

        agTimelineLine.css({ top: topPosition, bottom: bottomPosition });

        fnUpdateProgress();
      }

      function fnUpdateProgress() {
        const agTopElement = agTimelineItem.last().find(agTimelinePoint);

        if (agTopElement.length > 0) {
          const agTop = agTopElement.offset().top;
          const agPosY = $(window).scrollTop();
          const agOuterHeight = $(window).outerHeight();

          const i = agTop + agPosY - $(window).scrollTop();
          const a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
          let n = agPosY - a + agOuterHeight / 2;

          if (i <= agPosY + agOuterHeight / 2) {
            n = i - a;
          }

          agTimelineLineProgress.css({ height: n + "px" });

          agTimelineItem.each(function () {
            const agTop = $(this).find(agTimelinePoint).offset().top;
            const agPos = agTop + agPosY - $(window).scrollTop();

            if (agPos < agPosY + 0.5 * agOuterHeight) {
              $(this).addClass('js-ag-active');
            } else {
              $(this).removeClass('js-ag-active');
            }
          });
        }
      }

      function fnUpdateFrame(agPosY) {
        if (!agFlag) {
          requestAnimationFrame(() => {
            fnUpdateWindow();
            fnUpdateProgress();
          });
          agFlag = true;
        }
      }
    }
    // else {
      // console.log("Les éléments agTopElement ne sont pas présents dans le DOM.");
    // }
    });
  })(jQuery);
};


console.log("jettimeline")
