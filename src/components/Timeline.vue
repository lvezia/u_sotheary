<template>
  <div id="Timeline">
    <section class="timeline">
      <ul>
        <li v-for="(eventItem, index) in eventTimeline" :key="index">
          <div>
            <time class="time-timeline">{{ eventItem.date }}</time>
            <h4 class="pt-2">{{ eventItem.title }}</h4>
            <p>{{ eventItem.description }}</p>
            <span class="locationTimeline">{{ eventItem.city }}, {{ eventItem.country }}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import EventTimeline from '../views/datasetTimeline.json'

export default {
  name: 'Timeline',
  computed: {
    eventTimeline() {
      return EventTimeline.timeline
    }
  }
}
</script>

<style scoped>

/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
  padding: 50px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  padding-top: 50px;
  margin-left: 30%;
  background: var(--lightGrey);
}

.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--firstColor);
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 350px;
  padding: 15px;
  color: #fff;
  background: var(--firstColor);
  border-radius: 5px;
  box-shadow: 0 0 7px #1cc3b1;
  left: 45px;
}

.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent var(--firstColor) transparent transparent;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 1200px) {
  .timeline ul li div {
    width: 350px;
  }
}

@media screen and (max-width: 996px) {
  .timeline ul li div {
    width: 250px;
  }
}

@media screen and (max-width: 600px) {

  .timeline ul li {
    margin-left: 10px;
  }
  .timeline ul li div {
    width: calc(100vw - 130px);
  }
}

.locationTimeline {
  color: var(--secondColor)
}

.time-timeline {
  position: relative;
  left: -35px;
  background-color: var(--secondColor);
  border-radius: 5px;
  padding: 5px;
}
</style>