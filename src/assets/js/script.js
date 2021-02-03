const tabs = document.querySelectorAll('[data-tab-btn]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    showTabPanel(e);
  });
});

function showTabPanel(e) {
  const targetId = e.target.dataset.tabBtn,
    target = document.getElementById(targetId);

  tabs.forEach((tabBtn) => {
    tabBtn.classList.remove('active');
  });
  e.target.classList.add('active');

  tabsContent.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });
  target.classList.add('active');
}
