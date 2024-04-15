/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders" />
              {"{"}" "{"}"}
              <span className="align-middle">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-profile.html">
              <i className="align-middle" data-feather="user" />
              {"{"}" "{"}"}
              <span className="align-middle">Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-sign-in.html">
              <i className="align-middle" data-feather="log-in" />
              {"{"}" "{"}"}
              <span className="align-middle">Sign In</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-sign-up.html">
              <i className="align-middle" data-feather="user-plus" />
              {"{"}" "{"}"}
              <span className="align-middle">Sign Up</span>
            </a>
          </li>
          <li className="sidebar-item active">
            <a className="sidebar-link" href="pages-blank.html">
              <i className="align-middle" data-feather="book" />
              {"{"}" "{"}"}
              <span className="align-middle">Blank</span>
            </a>
          </li>
          <li className="sidebar-header">Tools &amp; Components</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-buttons.html">
              <i className="align-middle" data-feather="square" />
              {"{"}" "{"}"}
              <span className="align-middle">Buttons</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-forms.html">
              <i className="align-middle" data-feather="check-square" />
              {"{"}" "{"}"}
              <span className="align-middle">Forms</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-cards.html">
              <i className="align-middle" data-feather="grid" />
              {"{"}" "{"}"}
              <span className="align-middle">Cards</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-typography.html">
              <i className="align-middle" data-feather="align-left" />
              {"{"}" "{"}"}
              <span className="align-middle">Typography</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="icons-feather.html">
              <i className="align-middle" data-feather="coffee" />
              {"{"}" "{"}"}
              <span className="align-middle">Icons</span>
            </a>
          </li>
          <li className="sidebar-header">Plugins &amp; Addons</li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="charts-chartjs.html">
              <i className="align-middle" data-feather="bar-chart-2" />
              {"{"}" "{"}"}
              <span className="align-middle">Charts</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="maps-google.html">
              <i className="align-middle" data-feather="map" />
              {"{"}" "{"}"}
              <span className="align-middle">Maps</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
