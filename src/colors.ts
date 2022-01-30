const ansiColors = {
	"black": "\033[0;30m",
	"red": "\033[0;31m",
	"green": "\033[0;32m",
	"yellow": "\033[0;33m",
	"blue": "\033[0;34m",
	"purple": "\033[0;35m",
	"cyan": "\033[0;36m",
	"white": "\033[0;37m",
	"reset": "\033[0m"
};

module.exports = {
	"black": (text: string) => {return `${ansiColors.black}${text}${ansiColors.reset}`},
	"red": (text: string) => {return `${ansiColors.red}${text}${ansiColors.reset}`},
	"green": (text: string) => {return `${ansiColors.green}${text}${ansiColors.reset}`},
	"yellow": (text: string) => {return `${ansiColors.yellow}${text}${ansiColors.reset}`},
	"blue": (text: string) => {return `${ansiColors.blue}${text}${ansiColors.reset}`},
	"purple": (text: string) => {return `${ansiColors.purple}${text}${ansiColors.reset}`},
	"cyan": (text: string) => {return `${ansiColors.cyan}${text}${ansiColors.reset}`},
	"white": (text: string) => {return `${ansiColors.white}${text}${ansiColors.reset}`}
};