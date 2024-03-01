class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId;
	}

	addClock(time, callback) {
		if (time != null && callback != null) {
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
		} else {
			throw new Error("Отсутсвуют обязательные аргументы");
		}
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(timer => timer.time === time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId != null) {
			this.intervalId = () => {
				this.alarmCollection.forEach(timer => {
					if (timer.canCall === true && timer.time === getCurrentFormattedTime()) {
						timer.canCall = false;
						timer.callback();
					}
				})
			}
		}
	}
}