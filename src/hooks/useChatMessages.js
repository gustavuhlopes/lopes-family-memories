import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

/**
 * Custom hook para buscar mensagens em tempo real de uma sala de chat no Firestore.
 * @param {object} db - Instância do Firestore
 * @param {string} chatRoomId - ID da sala de chat
 * @returns {Array} Array de mensagens
 */
function useChatMessages(db, chatRoomId) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!db || !chatRoomId) return;
    const messagesRef = collection(db, 'messageslopes', chatRoomId, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, [db, chatRoomId]);

  return messages;
}

export default useChatMessages;
