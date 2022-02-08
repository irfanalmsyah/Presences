const presence = new Presence({
	clientId: "940422882532683808"
});

presence.on("UpdateData", async () => {
	const path = document.location.pathname;
	
	if (path ==="/mod/quiz/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}
	
	if (path ==="/mod/assign/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}
	
	if (path ==="/mod/scorm/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/mod/resource/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/mod/page/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/mod/forum/view.php"){
		const course_name = document.querySelector("h1")
		const quiz_name = document.querySelector("h2")

		return presence.setActivity({
			details: `Viewing ${course_name.textContent}`,
			state: quiz_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/course/view.php"){
		const course_name = document.querySelector("h1")

		return presence.setActivity({
			details: "Viewing a course",
			state: course_name.textContent,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/calendar/view.php"){
		return presence.setActivity({
			details: "Viewing their calendar",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/badges/mybadges.php"){
		return presence.setActivity({
			details: "Viewing their badges",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/my/"){
		return presence.setActivity({
			details: "Viewing Their Dashboard",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/my/index.php"){
		return presence.setActivity({
			details: "Customizing their dashboard",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/user/preferences.php"){
		return presence.setActivity({
			details: "Viewing a page:",
			state: "Preferences",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/user/profile.php"){
		return presence.setActivity({
			details: "Viewing a user",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/grade/report/overview/index.php"){
		return presence.setActivity({
			details: "Viewing their grades",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/login/index.php"){
		return presence.setActivity({
			details: "Trying to login",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path ==="/mod/forum/index.php"){
		return presence.setActivity({
			details: "Viewing a page:",
			state: "Forums",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}

	if (path === "/course/search.php") {
		const searching = document.location.search
			.replace("?search=", "")
			.split("+")
			.join(" ");

		return presence.setActivity({
			details: "Searching for:",
			state: `${searching[0].toUpperCase() + searching.slice(1).toLowerCase()}`,
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}
	
	if (path ==="/"){
		return presence.setActivity({
			details: "Viewing a page:",
			state: "Homepage",
			largeImageKey: "logoipb",
			startTimestamp: Math.floor(Date.now() / 1000)
		});
	}
});
