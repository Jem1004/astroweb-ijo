'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#202322',
      padding: '50px 0px',
      fontFamily: 'Roboto, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontSize: '14px',
      lineHeight: '21px',
      color: 'rgb(255, 255, 255)'
    }}>
      <div style={{
        maxWidth: '1320px',
        margin: '0px 195px',
        padding: '50px 12px 0px',
        color: 'rgb(255, 255, 255)'
      }}>
        {/* Main Footer Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-24px -12px 0px'
        }}>
          {/* Company Info Section */}
          <div style={{
            display: 'block',
            width: '440px',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: '24px 0px 0px',
            padding: '0px 12px'
          }}>
            <a
              href="index.html"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'rgb(255, 255, 255)',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: '36px',
                transition: '0.3s',
                fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer'
              }}
            >
              Astro Digital Solution
            </a>
            <div style={{
              display: 'block',
              padding: '16px 0px 0px'
            }}>
              <p style={{
                display: 'block',
                width: '416px',
                margin: '0px 0px 5px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                Jl. Palembang - Jambi, KM. 75, Kec. Betung
              </p>
              <p style={{
                display: 'block',
                width: '416px',
                margin: '0px 0px 5px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                Banyuasin, Sumatera Selatan (30958)
              </p>
              <p style={{
                display: 'block',
                width: '416px',
                margin: '16px 0px 5px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <strong style={{ color: 'rgb(255, 255, 255)' }}>Telepon:</strong> <span style={{ color: 'rgb(255, 255, 255)' }}> +62 8516 295 1515</span>
              </p>
              <p style={{
                display: 'block',
                width: '416px',
                margin: '0px 0px 5px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <strong style={{ color: 'rgb(255, 255, 255)' }}>Email:</strong> <span style={{ color: 'rgb(255, 255, 255)' }}> admin@astrodigital.id</span>
              </p>
            </div>
          </div>

          {/* Tautan Berguna Section */}
          <div style={{
            display: 'block',
            width: '220px',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: '24px 0px 30px',
            padding: '0px 12px'
          }}>
            <h4 style={{
              display: 'block',
              position: 'relative',
              width: '196px',
              margin: '0px 0px 8px',
              padding: '0px 0px 12px',
              fontFamily: 'Nunito, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19.2px',
              color: 'rgb(255, 255, 255)',
              transition: 'all'
            }}>
              Tautan Berguna
            </h4>
            <ul style={{
              display: 'block',
              width: '196px',
              listStyle: 'none',
              padding: '0px',
              margin: '0px'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 0px 10px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Beranda
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Tentang Kami
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Layanan
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Solusi Layanan Kami Section */}
          <div style={{
            display: 'block',
            width: '220px',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: '24px 0px 30px',
            padding: '0px 12px'
          }}>
            <h4 style={{
              display: 'block',
              position: 'relative',
              width: '196px',
              margin: '0px 0px 8px',
              padding: '0px 0px 12px',
              fontFamily: 'Nunito, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19.2px',
              color: 'rgb(255, 255, 255)',
              transition: 'all'
            }}>
              Solusi Layanan Kami
            </h4>
            <ul style={{
              display: 'block',
              width: '196px',
              listStyle: 'none',
              padding: '0px',
              margin: '0px'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 0px 10px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Desain Web
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Pengembangan Web
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Manajemen Produk
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                fontSize: '14px',
                lineHeight: '21px',
                color: 'rgb(255, 255, 255)'
              }}>
                <i
                  className="bi bi-chevron-right"
                  style={{
                    display: 'block',
                    width: '12px',
                    height: '12px',
                    marginRight: '3px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    lineHeight: '0px'
                  }}
                ></i>
                <a
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '14px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  Pemasaran
                </a>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami Section */}
          <div style={{
            display: 'block',
            width: '440px',
            maxWidth: '100%',
            boxSizing: 'border-box',
            margin: '24px 0px 0px',
            padding: '0px 12px'
          }}>
            <h4 style={{
              display: 'block',
              position: 'relative',
              width: '416px',
              margin: '0px 0px 8px',
              padding: '0px 0px 12px',
              fontFamily: 'Nunito, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19.2px',
              color: 'rgb(255, 255, 255)',
              transition: 'all'
            }}>
              Ikuti Kami
            </h4>
            <p style={{
              display: 'block',
              width: '416px',
              margin: '0px 0px 16px',
              fontSize: '14px',
              lineHeight: '21px',
              color: 'rgb(255, 255, 255)'
            }}>
              Kami adalah perusahaan teknologi yang berkomitmen untuk memberikan solusi digital inovatif kepada klien kami, membantu mengembangkan bisnis mereka dalam mengembangkan website dan sistem informasi yang berkualitas.
            </p>
            <div style={{
              display: 'flex',
              width: '416px',
              height: '40px',
              fontSize: '14px',
              lineHeight: '21px',
              color: 'rgb(255, 255, 255)'
            }}>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-twitter-x"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-facebook"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-instagram"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-linkedin"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-linkedin"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
              <a
                href=""
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  margin: '0px 10px 0px 0px',
                  marginRight: '10px',
                  border: '1px solid rgba(65, 84, 241, 0.15)',
                  borderRadius: '4px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(65, 84, 241)',
                  backgroundColor: 'rgba(65, 84, 241, 0.03)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i
                  className="bi bi-instagram"
                  style={{
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    color: 'rgb(65, 84, 241)',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    lineHeight: '16px',
                    verticalAlign: '-2px'
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{
          display: 'block',
          width: '1320px',
          maxWidth: '1320px',
          margin: '24px 195px 0px',
          padding: '25px 12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '14px',
          lineHeight: '21px',
          textAlign: 'center',
          color: 'rgb(255, 255, 255)'
        }}>
          <p style={{
            display: 'block',
            width: '1296px',
            margin: '0px',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'rgb(255, 255, 255)'
          }}>
            © <span style={{ color: 'rgb(255, 255, 255)' }}>Hak Cipta</span> <strong style={{
              display: 'inline',
              padding: '0px 4px',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '21px',
              textAlign: 'center',
              color: 'rgb(255, 255, 255)'
            }}>Astro Digital Solution</strong> <span style={{ color: 'rgb(255, 255, 255)' }}>Semua Hak Dilindungi</span>
          </p>
          <div style={{
            display: 'block',
            width: '1296px',
            margin: '6px 0px 0px',
            fontSize: '13px',
            lineHeight: '19.5px',
            textAlign: 'center',
            color: 'rgb(255, 255, 255)'
          }}>
            Desain oleh
            <a
              href="https://www.astrodigital.id"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline',
                color: 'rgb(65, 84, 241)',
                textDecoration: 'none',
                fontSize: '13px',
                lineHeight: '19.5px',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            >
              ASTRO DIGITAL SOLUTION
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}