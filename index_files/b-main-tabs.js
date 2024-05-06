// "use strict";

document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.querySelector('.b-main-tabs');
  const tabsItems = tabs.querySelectorAll('.b-main-tabs__item');
  const tabsBlocks = tabs.querySelectorAll('.b-main-tabs__block');

  const subTabs = document.querySelector('.b-main-tabs__subtabs');
  const subtabsItems = subTabs.querySelectorAll('.b-main-tabs__subitem');
  const subtabsBlocks = document.querySelectorAll('.b-main-tabs__subblock');

  
  // Функция переключения табов
  const tabsToggle = function (tabModul, arrTabItems, arrTabBlocks){  
    if(tabModul && arrTabItems.length > 1){
      for (let i = 0; i < arrTabItems.length; i++) {
        arrTabItems[i].addEventListener('click', () => {
          clear();
          arrTabItems[i].classList.toggle('active');
          arrTabBlocks[i].classList.toggle('active');
  
          function clear(){
            arrTabItems.forEach((element) => {
              element.classList.remove('active')
            });
            arrTabBlocks.forEach((element) => {
              element.classList.remove('active')
            })
          }
        })
      }
    }
  }

  tabsToggle(tabs, tabsItems, tabsBlocks);
  tabsToggle(subTabs, subtabsItems, subtabsBlocks);


  // Функция скрытия/раскрытия элементов на мобильной версии - услуги
  const showButtons = document.querySelectorAll('.b-main-tabs__show');
  
  start();
  window.onresize = start;

  function start(){
    for (let j = 0; j < subtabsBlocks.length; j++){
      const tabsLinks = subtabsBlocks[j].querySelectorAll('.b-main-tabs__subblock ul li');
      const tabsLists = document.querySelectorAll('.b-main-tabs__list');

      changeMobile(tabsLinks);

      function changeMobile(tabsLinks) {
        if (tabsLinks.length > 16 && document.documentElement.clientWidth < 768) {
          showButtons.forEach((element) => {
            element.style.display="block";
            element.textContent = 'Показать ещё';
          });

          removeLinks();
          removeList()
          showList();
    
          function removeLinks() {
            for (let i = 16; i < tabsLinks.length; i++) {
              tabsLinks[i].style.display="none";
            }
          }

          function removeList() {
            for (let i = 2; i < tabsLists.length; i++) {
              tabsLists[i].style.display="none";
            }
          }

          function showList() {
            showButtons.forEach((element) => {
              element.addEventListener('click', () => {
                if (element.textContent = 'Показать ещё') {
                  for (let i = 16; i < tabsLinks.length; i++) {
                    tabsLinks[i].style.display="block";
                  }

                  for (let i = 2; i < tabsLists.length; i++) {
                    tabsLists[i].style.display="block";
                  }

                  element.textContent = 'Скрыть';
                  hideList();
                }
              });
            });
          }
          
          function hideList() {
            showButtons.forEach((element) => {
              element.addEventListener('click', () => { 
                if (element.textContent = 'Скрыть') {
                  removeLinks();
                  removeList();
                  element.textContent = 'Показать ещё';
                  showList();
                }
              })
            })
            
          }
        }
        
        else {
          showButtons.forEach((element) => {
            element.style.display="none";
            for (let i = 16; i < tabsLinks.length; i++) {
              tabsLinks[i].style.display="block";
            }
          })
          
        }
      }
    };
  }
})