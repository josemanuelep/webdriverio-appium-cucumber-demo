class DateHelper {
  static date: Date = new Date();
  static day = this.date.getDate();
  static month = this.date.getMonth() + 1;
  static year = this.date.getFullYear();

 static getTodayDate() {
    return `${this.day}/${this.month}/${this.year}`;
 }
}

export { DateHelper };

