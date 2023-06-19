const iceServers = [
  // Test some STUN server
  {
    urls: "stun:3.109.214.107:3478",
  },
  // Test some TURN server
  {
    urls: "turn:3.109.214.107:3478?transport=udp",
    username: "1686688030",
    credential: "bCGXRc9VCNuY2VbjXa0gHsM5orU=",
  },
];

const pc = new RTCPeerConnection({
  iceServers,
});

pc.onicecandidate = (e) => {
  if (!e.candidate) return;

  // Display candidate string e.g
  // candidate:842163049 1 udp 1677729535 XXX.XXX.XX.XXXX 58481 typ srflx raddr 3.109.214.107 rport 0 generation 0 ufrag sXP5 network-cost 999
  console.log(e.candidate.candidate);

  // If a srflx candidate was found, notify that the STUN server works!
  if (e.candidate.type == "srflx") {
    console.log("The STUN server is reachable!");
    console.log(`   Your Public IP Address is: ${e.candidate.address}`);
  }

  // If a relay candidate was found, notify that the TURN server works!
  if (e.candidate.type == "relay") {
    console.log("The TURN server is reachable !");
  }
};

// Log errors:
// Remember that in most of the cases, even if its working, you will find a STUN host lookup received error
// Chrome tried to look up the IPv6 DNS record for server and got an error in that process. However, it may still be accessible through the IPv4 address
pc.onicecandidateerror = (e) => {
  console.error(e);
};

pc.createDataChannel("ourcodeworld-rocks");
pc.createOffer().then((offer) => pc.setLocalDescription(offer));
