export const formatDate = (timestamp: string) => {
  const messageDate = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const messageDateStr = messageDate.toLocaleDateString();
  const todayStr = today.toLocaleDateString();
  const yesterdayStr = yesterday.toLocaleDateString();

  if (messageDateStr === todayStr) {
    console.log("aq");
    return "Hoje";
  } else if (messageDateStr === yesterdayStr) {
    return "Ontem";
  } else {
    return messageDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
};
