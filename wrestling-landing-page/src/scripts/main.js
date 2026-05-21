const starGrid = document.getElementById('starGrid');
  const starSearch = document.getElementById('starSearch');
  const starGroup = document.getElementById('starGroup');

  function refreshStars() {
    const q = starSearch.value.trim().toLowerCase();
    const group = starGroup.value;
    starGrid.querySelectorAll('.star-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const matchGroup = group === 'all' || card.classList.contains(group);
      const matchQuery = !q || title.includes(q);
      card.style.display = (matchGroup && matchQuery) ? '' : 'none';
    });
  }

  if (starSearch && starGroup && starGrid) {
    starSearch.addEventListener('input', refreshStars);
    starGroup.addEventListener('change', refreshStars);
    document.getElementById('searchBtn')?.addEventListener('click', refreshStars);
  }

  document.addEventListener('DOMContentLoaded', function () {
    starGrid.querySelectorAll('.star-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const starId = card.dataset.star;
        if (!starId) return;
        window.location.href = `superstar.html?id=${encodeURIComponent(starId)}`;
      });
    });

    const starCards = document.querySelectorAll('.star-card');
    const profileModal = document.getElementById('starProfileModal');
    const profileClose = document.getElementById('profileClose');
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');
    const profileRole = document.getElementById('profileRole');
    const profileBio = document.getElementById('profileBio');

    function openProfile(card) {
      profileImage.src = card.dataset.img || card.querySelector('img').src;
      profileImage.alt = card.dataset.name || card.querySelector('h3').textContent;
      profileName.textContent = card.dataset.name || 'Unknown';
      profileRole.textContent = card.dataset.role || 'Superstar';
      profileBio.textContent = card.dataset.bio || 'No bio available.';
      profileModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeProfile() {
      profileModal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    starCards.forEach(card => {
      card.addEventListener('click', () => openProfile(card));
    });

    profileClose.addEventListener('click', closeProfile);
    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) closeProfile();
    });
  });