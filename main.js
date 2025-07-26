function toggleLang() {
    const introText = document.getElementById("intro-text");
    const aboutText = document.getElementById("about-text");
    const servicesList = document.getElementById("services-list");
    const email = document.getElementById("email");

    if (introText.innerText.includes("Automatización")) {
        introText.innerText = "Automation, Bots, WebApps, Mobile Apps and Artificial Intelligence.";
        aboutText.innerText = "Men2zAI Tech Solutions offers innovative and accessible technology solutions to automate processes, create virtual assistants, mobile apps, and more.";
        servicesList.innerHTML = `
            <li>🤖 Bots for networks and business</li>
            <li>🔄 Task automation</li>
            <li>🌐 Custom WebApps</li>
            <li>📱 Mobile applications</li>
            <li>🧠 Artificial Intelligence solutions</li>`;
    } else {
        introText.innerText = "Automatización, Bots, WebApps, Apps móviles e Inteligencia Artificial.";
        aboutText.innerText = "Men2zAI Tech Solutions es una empresa dedicada a ofrecer soluciones tecnológicas innovadoras y accesibles para automatizar procesos, crear asistentes virtuales, apps móviles y más.";
        servicesList.innerHTML = `
            <li>🤖 Bots para redes y negocios</li>
            <li>🔄 Automatización de tareas</li>
            <li>🌐 WebApps personalizadas</li>
            <li>📱 Aplicaciones móviles</li>
            <li>🧠 Soluciones con Inteligencia Artificial</li>`;
    }
}