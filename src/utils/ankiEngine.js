// Anki Spaced Repetition Engine for CONAMEU Prep

const STORAGE_KEY = 'conameu_anki_progress';

export function getLocalAnkiState(uid = 'guest') {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}_${uid}`);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Error reading anki state:", e);
    return {};
  }
}

export function saveLocalAnkiState(state, uid = 'guest') {
  try {
    localStorage.setItem(`${STORAGE_KEY}_${uid}`, JSON.stringify(state));
  } catch (e) {
    console.error("Error saving anki state:", e);
  }
}

/**
 * Procesa la calificación de una tarjeta estilo Anki:
 * rating: 'again' (1), 'hard' (2), 'good' (3), 'easy' (4)
 */
export function rateCard(cardId, rating, currentState = {}) {
  const cardData = currentState[cardId] || {
    cardId,
    repetitions: 0,
    interval: 0, // días
    easeFactor: 2.5,
    state: 'aprendizaje', // 'aprendizaje', 'repaso', 'dominada'
    history: []
  };

  const now = new Date();
  let nextInterval = 0;
  let nextState = cardData.state;
  let ease = cardData.easeFactor;

  if (rating === 'again') {
    cardData.repetitions = 0;
    nextInterval = 0; // Inmediato
    nextState = 'aprendizaje';
    ease = Math.max(1.3, ease - 0.2);
  } else if (rating === 'hard') {
    cardData.repetitions += 1;
    nextInterval = cardData.repetitions <= 1 ? 1 : Math.round(cardData.interval * 1.2);
    nextState = 'aprendizaje';
    ease = Math.max(1.3, ease - 0.15);
  } else if (rating === 'good') {
    cardData.repetitions += 1;
    if (cardData.repetitions === 1) nextInterval = 1;
    else if (cardData.repetitions === 2) nextInterval = 3;
    else nextInterval = Math.round((cardData.interval || 3) * ease);
    nextState = 'repaso';
  } else if (rating === 'easy') {
    cardData.repetitions += 1;
    if (cardData.repetitions === 1) nextInterval = 4;
    else nextInterval = Math.round(((cardData.interval || 4) * ease) * 1.3);
    nextState = 'dominada';
    ease += 0.15;
  }

  const nextDueDate = new Date(now.getTime() + nextInterval * 24 * 60 * 60 * 1000);

  const updatedCard = {
    ...cardData,
    repetitions: cardData.repetitions,
    interval: nextInterval,
    easeFactor: parseFloat(ease.toFixed(2)),
    state: nextState,
    lastReviewed: now.toISOString(),
    dueDate: nextDueDate.toISOString(),
    lastRating: rating
  };

  return updatedCard;
}
