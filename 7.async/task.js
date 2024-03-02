class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time == null && callback == null) {
			throw new Error("Отсутсвуют обязательные аргументы");
		}

		for (let alarm of this.alarmCollection) {
			if (alarm.time === time) {
				console.warn("Уже присутствует звонок на это время");
			}
		}

		this.alarmCollection.push({
			callback,
			time: time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(timer => timer.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId != null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.some(timer => {
				if (timer.canCall === true && timer.time === this.getCurrentFormattedTime()) {
					timer.canCall = false;
					timer.callback();
				}
			});
		});
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(timer => timer.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}