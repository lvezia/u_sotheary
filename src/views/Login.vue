<template>
  <div id="Login">
    <Particles
      id="particles-container"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
          background: {
              color: {
                  value: '#0E2837'
              }
          },
          fpsLimit: 60,
          interactivity: {
              detectsOn: 'canvas',
              events: {
                  onClick: {
                      enable: false,
                      mode: 'push'
                  },
                  onHover: {
                      enable: false,
                      mode: 'repulse'
                  },
                  resize: true
              },
              modes: {
                  bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40
                  },
                  push: {
                      quantity: 4
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4
                  }
              }
          },
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727
              }
            },
            color: {
              value: '#ffffff'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.4,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
      }"
    />
    <div class="card-container">
      <h3>{{ $t('login.login') }}</h3>
      <form>
        <div class="user-field">
          <input type="text" name="" required="true">
          <label>{{ $t('login.email') }}</label>
        </div>
        <div class="user-field">
          <input type="password" name="" required="true">
          <label>{{ $t('login.password') }}</label>
        </div>
        <button href="#">
          {{ $t('login.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  title: 'Login',
  mounted() {},
  methods: {}
}
</script>

<style scoped>
#particles-container {
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  width: 100%;
}

.card-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.card-container h3 {
  color: var(--lightGrey);
  text-align: center;
  margin-bottom: 20px;
}

.card-container button {
  color: var(--lightGrey);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-container button:hover {
  box-shadow: 0 0 15px #fff
}

@media only screen and (max-width: 767px) {
  .card-container {
    width: 350px;
  }
}
</style>