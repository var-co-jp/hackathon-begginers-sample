const chatHeader = document.getElementById("chat-header");
chatHeader.addEventListener("click", updateChannel);
const updateChannel = () => {
  if (uid !== channel.uid) {
    return;
  } else {
    console.log("same");
    chatHeader.innerHTML = "";
    const form = document.createElement("form");
    form.action = `/update_channel/${channel.id}`;
    form.method = "post";
    // const channelName = document.getElementById('chatroom-name')
    // const channelDescription = document.getElementById('chatroom-description')
    const channelNameInput = document.createElement("input");
    channelNameInput.value = channel.name;
    const channelDescriptionInput = document.createElement("input");
    channelDescriptionInput.value = channel.abstract;
    chatHeader.appendChild(channelNameInput);
    chatHeader.appendChild(channelDescriptionInput);

    const link = document.createElement("a");
    const updateButton = document.createElement("button");
    updateButton.innerText = "更新";
    link.appendChild(updateButton);
    chatHeader.appendChild(link);
    // form.submit();
  }
};
